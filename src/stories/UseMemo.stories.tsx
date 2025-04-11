import React, {useMemo, useState} from "react";


export default {
  title: 'useMemo',
}

export const DifficultCountExample = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 1000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a])

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <div>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
      <hr/>
      <div>
        Result for a: {resultA}
      </div>
      <div>
        Result for b: {resultB}
      </div>
    </div>
  )
}

type UsersProps = {
  users: string[]
}

const UsersSecret = (props: UsersProps) => {
  console.log("USERS SECRET")
  return (
    <div>
      {props.users.map((user: string, i) => {
        return <div key={i}>{user}</div>
      })}
    </div>
  )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
  console.log("Helps to ReactMemo");

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);
  const newArr = useMemo(() => {
    return users.filter((user) => user.toLowerCase().indexOf("a") > -1)
  }, [users]);

  const addUser = () => {
    let newUser = "Sveta " + new Date().getTime()
    setUsers(prevState => [...prevState, newUser]);
  }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>{counter}</div>
      <button onClick={addUser}>add user</button>
      <Users users={newArr}/>
    </div>
  )
}
