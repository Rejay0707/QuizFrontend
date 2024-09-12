import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../Constants.js";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    backgroundImage:
      "url(https://images.pexels.com/photos/34225/spider-web-with-water-beads-network-dewdrop.jpg?cs=srgb&dl=pexels-pixabay-34225.jpg&fm=jpg)",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: 500,
    height: 280,
    margin: "auto",
  },
}));

const QuestionCard = () => {
  const classes = useStyles();
  const [questions,setQuestions]=useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const categoryId=useSelector((state)=>state.id.id)
  console.log(categoryId)

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/quizQuestion`);
        const filteredQuestions = response.data.filter((question) => question.categoryId._id === categoryId);
        if (filteredQuestions.length > 0) {
          filteredQuestions.forEach((question) => {
            console.log(`Question: ${question.question}`);
            console.log(`Correct Answer: ${question.correctAnswer}`);
            console.log(`Created At: ${question.createdAt}`);
            console.log(`Difficulty Level: ${question.difficultyLevelId.level}`);
            console.log(`Options: ${question.options.join(', ')}`);
            console.log(`Updated At: ${question.updatedAt}`);
            console.log(`ID: ${question._id}`);
            console.log('------------------------');
          });
        } else {
          console.log('No questions found with the given category ID');
        }
        setQuestions(filteredQuestions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [categoryId]); // Add categoryId to the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Questions
          </Typography>
          {Array.isArray(questions) && questions.map((question) => (
            <div key={question._id}>
              <Typography variant="body1" component="p">
                {question.question}
              </Typography>
              <Typography variant="body2" component='p'>
                {question.options}
              </Typography>
            </div>
          ))}
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuestionCard;
