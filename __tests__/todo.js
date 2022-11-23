/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List,() => {
  beforeAll(() => {
    const indra = new Date();
    const jai = 86400000;
    [
      {
        title: "characterv1",
        completed: false,
        dueDate: new Date(indra.getTime() - jai).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "characterv2",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "characterv3",
        completed: false,
        dueDate: new Date(today.getTime() + lastday).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("new_thing", () => {
    expect(all.length).toEqual(3);
    add({
      title: "hello world",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test(" todo", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("overdue", () => {
    expect(overdue().length).toEqual(1);
  });

  test("taday retreival", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("last retrieval", () => {
    expect(dueLater().length).toEqual(1);
  });
});