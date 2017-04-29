___
# FractalTrees.js
### A fractal generating app using native Javascript and an instance of Canvas.

| Var             | Description     |
| :-------------   |:---------------|
| `mainBranch`      | Main generated branch|
| `subBranches`    | Sub branches that are generated "infinitely"|
| `travel`          | Defines travel distance of branches|
| `branchWidth`     | Width of the stroke of generated branches|
| `length`          | Length of each new tree relative to window size|
| `angle`           | Angle of path of each new tree|
| `start[var]`, `end[var]` | Defines path starting and ending values|

Branches are generated that get smaller and smaller infinitely  (i.e. 0 is an asymptote that the width of the branches will approach - leave it running for a while and see!).

### NOTE: Runs best in Chrome!
#### Also: If you resize the browser, simply click "Generate!" and the new tree will be created in accordance to the new browser size.

(*UPDATE: I now intend on integrating a UI with the app using jQuery where the user is able to adjust certain parameters themselves. Stay tuned.*)

[View live Demo](https://rawgit.com/sambgordon/Recursive-Fractal-Trees/master/index.html)
___
