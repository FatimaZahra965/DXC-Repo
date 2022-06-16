import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";
  
  const Blog = (props) => {
    return (
      <Card>
        <CardBody className="p-4">
        <CardImg alt="Card image cap" src={props.image} />
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle>{props.code}</CardSubtitle>
          <CardText className="mt-3">{props.text}</CardText>
          <Button color={props.color}>Read More</Button>
        </CardBody>
      </Card>
    );
  };
  
  export default Blog;