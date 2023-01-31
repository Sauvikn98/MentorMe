const { User, Post, MenteePost } = require("../modals/mongoose-model");

exports.addPost = async (req, res) => {
  const { title, text, targetMentorId, targetMentorName } = req.body;
  try {
    let newPost;
    if(req.user.account_type == 'mentee'){
      newPost = await MenteePost.create({
        title,
        text,
        author: {
          authorId: req.user.id,
          authorName: req.user.name,
        },
        targetMentor: {
          id: targetMentorId,
          name: targetMentorName
        },
        post_type: "mentee_post"
      });
    } else {
      newPost = await Post.create({
        title,
        text,
        author: {
          authorId: req.user.id,
          authorName: req.user.name,
        },
        post_type: "mentor_post"
      });
    }
    console.log(newPost)
    const user = await User.findOneAndUpdate(
      {
        _id: req.user.id,
      },
      {
        $push: {
          posts: {
             id: newPost._id,
             title: newPost.title
          },
        },
      },
      { new: true }
    );
    console.log(user)
    return res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};


exports.getPostsFromMentors = async (req, res) => {
  try {
    console.log("Hello")
    const myMentors = await User.findById({ _id: req.user.id }).select(
      "approvedMentors"
    );
    console.log(myMentors)
    const mentorsIds = myMentors.approvedMentors.map(mentor=> mentor.id)
    const post = await Post.find({ "author.authorId" : { $in : mentorsIds }})
    if (!post) {
      return res.status(404).json({ error: "No post found!" });
    }
    return res.json(post);
  } catch (err) {
    console.log(err)
    res.status(500).json({ errors: "Server Error" });
  }
};

exports.getPostsFromMentees = async (req, res) => {
  try {
    console.log("Hello")
    
   
    const post = await MenteePost.find({"targetMentor.id": req.user.id})
    if (!post) {
      return res.status(404).json({ error: "No post found!" });
    }
    return res.json(post);
  } catch (err) {
    console.log(err)
    res.status(500).json({ errors: "Server Error" });
  }
};

exports.addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: "No post found!" });
    } else {
      const newComment = {
        authorId: req.user.id,
        authorName: req.user.name,
        text: req.body.text,
        postedOn: new Date(),
      };
      post.comments.push(newComment);
      await post.save();
      const user = await User.findOneAndUpdate(
        {
          _id: req.user.id,
        },
        {
          $push: {
            comments: {
               id: newComment._id,
               title: newComment.text
            },
          },
        },
        { new: true }
      );
      console.log(user)
      return res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.removePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ error: "No post found!" });
    } else {
      if (post.author.authorId.toString() !== req.user.id) {
        return res
          .status(401)
          .json({ error: "You are not authorized to delete this post!" });
      }
      post.remove();
      return res.status(200).json({ msg: "Post Deleted!" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.removeComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ error: "No post found!" });
    } else {
      // Pull out comment
      const requiredComment = post.comments.find(
        (comment) => comment.id === req.params.commentId
      );
      if (!requiredComment) {
        return res.status(404).json({ error: "Comment doesnot exist" });
      } else {
        if (requiredComment.authorId.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ error: "You are not authorized to delete this comment!" });
        }

        post.comments = post.comments.filter(
          ({ id }) => id !== req.params.commentId
        );
        await post.save();
        return res.json(post);
      }
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getPostByID = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: "No post found!" });
    }
    return res.json(post);
  } catch (err) {
    res.status(500).json({ errors: "Server Error" });
  }
};



