import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  return (
    <Row>
      {props.postsArr.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.id} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
