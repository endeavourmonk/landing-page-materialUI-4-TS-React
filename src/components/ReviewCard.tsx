import React, { useState } from "react";
import {
  Typography,
  Button,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Link,
} from "@material-ui/core";

interface ReviewCardProps {
  name: string;
  review: string;
  platform: string;
  platformUrl: string;
  imgPath: string;
}

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    backgroundColor: "#3D3B40",
    color: "#eef7ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  media: {
    width: 80,
    height: 80,
    borderRadius: "50%",
  },
  button: {
    textTransform: "none",
    color: "#eef7ff",
  },
  link: {
    color: "#D0E8FF",
    fontWeight: 500,
  },
  marginBottom: {
    marginBottom: theme.spacing(1),
  },
}));

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  platform,
  platformUrl,
  imgPath,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const classes = useStyles();

  const toggleReview = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateReview = (text: string, maxLength: number = 100): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <CardMedia
        component="img"
        height="120"
        image={imgPath}
        alt={name}
        className={classes.media}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          style={{ fontWeight: 700 }}
          className={classes.marginBottom}
        >
          {name}
        </Typography>
        <Typography variant="body2" className={classes.marginBottom}>
          {isExpanded ? review : truncateReview(review)}
        </Typography>
        <Button onClick={toggleReview} className={classes.button}>
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
        <Link href={platformUrl} variant="body2" className={classes.link}>
          {platform}
        </Link>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
