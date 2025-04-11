import React, {useState} from "react";

export default {
  title: "React.memo"
}

const Filter = (props: any) => {
  return (
    <div>
      {props.count}
    </div>
  )
}

type CounterProps = {
  count: number
}

const NewMessageCounter = (props: CounterProps) => {
  console.log("NewMessageCounter")
  return (
    <div>
      {props.count}
    </div>
  )
}

type UsersProps = {
  users: string[]
}

const UsersSecret = (props: UsersProps) => {
  console.log("USERS")
  return (
    <div>
      {props.users.map((user: string, i) => {
        return <div key={i}>{user}</div>
      })}
    </div>
  )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);

  const addUser = () => {
    let newUser = "Sveta " + new Date().getTime()
    setUsers(prevState => [...prevState, newUser]);
  }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <NewMessageCounter count={counter}/>
      <button onClick={addUser}>add user</button>
      <Users users={users} />
    </div>
  )
}

