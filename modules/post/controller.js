const express = require('express');
const Post = require('./model');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.id });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createPost = async (req, res) => {
    try {
        const { userId, imageUrl } = req.body;
        const newPost = new Post({ userId, imageUrl });
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPosts,
    getPosts,
    createPost,
    updatePost,
    deletePost
};