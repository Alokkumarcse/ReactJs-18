// Creating a react object of html tags in react using React.createElement() method
/**
 * creating simple tag
 * <h1 id="heading" target="blank"> welcome to React </h1>
 */
const heading = React.createElement(
	"h1",
	{ id: "heading", target: "blank" },
	"Welcome to React"
);

console.log(heading, "heading");

/**
 * crating nested tags
 *
 * <div id="parent">
 *    <div id="child">
 *        <h1 id="head">h1 tag</h1>
 *    </div>
 * </div>
 */
const nestedTags = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement(
		"div",
		{ id: "child" },
		React.createElement("h1", { id: "head" }, "h1 tag")
	)
);

/**
 * crating siblings tags
 *
 * <div id="parent">
 *    <div id="child">
 *        <h1 id="head">h1 tag</h1>
 *        <h2 id="head">h2 tag</h2>
 *        <h3 id="head">h3 tag</h3>
 *    </div>
 * </div>
 */

const siblings = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", { id: "heading1" }, "h1"),
		React.createElement("h2", { id: "heading 2" }, "h2"),
		React.createElement("h3", { id: "heading 3" }, "h3"),
	])
);

/**
 * crating siblings of siblings tags
 *
 * <div id="parent">
 *    <div id="child1">
 *        <h1 id="head">h1 tag</h1>
 *        <h2 id="head">h2 tag</h2>
 *        <h3 id="head">h3 tag</h3>
 *    </div>
 *    <div id="child2">
 *        <h1 id="head">h1 tag</h1>
 *        <h2 id="head">h2 tag</h2>
 *        <h3 id="head">h3 tag</h3>
 *    </div>
 * </div>
 */

const nestedSiblings = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child1" }, [
		React.createElement("h1", { id: "heading1" }, "h1"),
		React.createElement("h2", { id: "heading 2" }, "h2"),
		React.createElement("h3", { id: "heading 3" }, "h3"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", { id: "heading1" }, "h1"),
		React.createElement("h2", { id: "heading 2" }, "h2"),
		React.createElement("h3", { id: "heading 3" }, "h3"),
	]),
]);

// creating root for react so that react insert everything here
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering our root and pass the React element object which is eventually converted into html tags.
root.render(nestedSiblings);
