import React from "react";

const Display = (props: any) => {
  console.log(" Display LN4", props);
  return (
    <div>
      <h1>{"Name :-" + props.data.name}</h1>
      <h1>{"City :-" + props.data.city}</h1>
      <h1>{"State :- " + props.data.state}</h1>
      <h1>{"Country :-" + props.data.contry}</h1>
      <h1>{"Email :-" + props.data.email}</h1>
      <h1>{"Github :-" + props.data.github}</h1>
      <h1>{"Photo :-" + props.data.photo}</h1>
    </div>
  );
};
export default Display;
