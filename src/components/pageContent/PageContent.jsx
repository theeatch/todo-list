import React from "react";

import TodoList from "../todoList/TodoList";

const PageContent = () => {
  return (
    <div className="flex flex-col w-full border-opacity-50 h-full">
      <div className="card h-full bg-base-300 rounded-box place-items-center ">
        <div className="p-5 h-1/2 flex flex-col w-full ">
          <textarea
            placeholder="Add Your Title Here!"
            className="textarea textarea-ghost textarea-lg text-5xl max-w-lg font-serif text-center self-center max-h-24 mb-5"
          ></textarea>
          <textarea
            className="textarea textarea-primary text-center w-60 font-serif text-slate-800 glass self-center"
            placeholder="Add your description here"
          ></textarea>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid h-full card bg-base-300 rounded-box place-items-center">
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
