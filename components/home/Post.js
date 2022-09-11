import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://img.icons8.com/windows/344/ffffff/like--v1.png",
    likedImageUrl: "https://img.icons8.com/fluency/344/ffffff/like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/ffffff/external-comment-chat-flatart-icons-outline-flatarticons-2.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/share-3.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/external-bearicons-gradient-bearicons/344/ffffff/external-Save-social-media-bearicons-gradient-bearicons.png",
  },
];

const Post = ({ post }) => {
  const handleLike = (post) => {
    const currenLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    );

    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_users: currenLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("Success udpated!");
      })
      .catch((error) => {
        console.log("Error udpating:", error);
      });
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} handleLike={handleLike} />
        <PostLikes post={post} />
        <Inscription post={post} />
        <Comments post={post} />
        <AddedComments post={post} />
      </View>
    </View>
  );
};

//Header of Instagram post
const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Image
            source={{ uri: post.profile_picture }}
            style={styles.stories}
          />
        </TouchableOpacity>
        <Text style={{ color: "#ffffff", marginLeft: 6, fontWeight: "600" }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ color: "#ffffff", fontWeight: "600" }}>...</Text>
    </View>
  );
};

//Image of Instagram post
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 400 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

//Instagram post footer
const PostFooter = ({ handleLike, post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIcons}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon}
          source={{
            uri: post.likes_by_users.includes(firebase.auth().currentUser.email)
              ? postFooterIcons[0].likedImageUrl
              : postFooterIcons[0].imageUrl,
          }}
        />
      </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View style={styles.rightFooterIcon}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

//Footer post icons
const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const PostLikes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <Text style={{ color: "#ffffff", fontWeight: "600" }}>
      {post.likes_by_users.length.toLocaleString("en")} likes
    </Text>
  </View>
);

const Inscription = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "#ffffff" }}>
      <Text style={{ fontWeight: "bold", marginRight: 7 }}>{post.user}</Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

//Double negation !! in comments
const Comments = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "#696969" }}>
        View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const AddedComments = ({ post }) => (
  <View>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "#ffffff" }}>
          <Text style={{ fontWeight: "400" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  stories: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.5,
    marginLeft: 10,
    borderColor: "#a105a1",
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  leftFooterIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "32%",
  },
  rightFooterIcon: {
    width: 30,
    height: 30,
  },
});

export default Post;
