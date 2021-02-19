import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  Callout,
  Intent,
  Button,
  Icon,
  FormGroup,
  InputGroup,
} from "@blueprintjs/core";
import { useTransition, animated } from "react-spring";
import styles from "./Todos.module.scss";

const initialTodos = [
  { id: uuidv4(), task: "Buy underwear", date: Date.now() },
  { id: uuidv4(), task: "Wear underwear", date: Date.now() },
].sort((a, b) => b.date - a.date);

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const transitions = useTransition(todos, (todo) => todo.id, {
    from: { opacity: 0, height: "0px", padding: 0, marginBottom: 0 },
    enter: { opacity: 1, height: "61px", padding: 16, marginBottom: 16 },
    leave: { opacity: 0, height: "0px", padding: 0, marginBottom: 0 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length === 0) return;

    setTodos(
      [...todos, { id: uuidv4(), task: todo, date: Date.now() }].sort(
        (a, b) => b.date - a.date
      )
    );
    setTodo("");
  };

  return (
    <Card className={styles.Todos}>
      <Callout className={styles.Container}>
        <form className={`${styles.Form}`} onSubmit={handleSubmit}>
          <FormGroup
            helperText="Add Todo to see animation"
            label="Add Todo:"
            labelFor="text-input"
          >
            <InputGroup
              id="text-input"
              fill
              large
              intent={Intent.PRIMARY}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </FormGroup>

          <div className="List">
            {todos &&
              transitions.map(({ item, props, key }) => (
                <animated.div
                  key={key}
                  className={`${styles.Todo}`}
                  style={props}
                  onClick={() => {
                    setTodos(todos.filter((it) => it.id !== item.id));
                  }}
                >
                  <span className={styles.Text}>{item.task}</span>
                </animated.div>
              ))}
          </div>

          <Button
            fill
            small
            intent="danger"
            onClick={() => setTodos([])}
            rightIcon={<Icon icon="trash" />}
          >
            Reset
          </Button>
        </form>
      </Callout>
    </Card>
  );
};

export default Todos;
