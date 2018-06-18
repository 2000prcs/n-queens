# N-Queens

> The problem in a nutshell

Given an n x n chessboard, how many different ways can you place n queens, such that none of them are attacking each other?

# Helpful Info

Don't reinvent wheel where you don't have to. Use the Board constructor you build out in `src/Board.js` in your code. You can also access it within the Chrome console easily after opening `BoardViewer.html`

- Create new board instances that have access to all the helper methods you write in `src/Board.js`
  example: `var board = new Board({n:5})`
- Rather than setting or getting object properties directly with plain JavaScript, Backbone provides the get and set methods. Play with the getters and setters that Backbone provides
  example: `board.get(3)` will return the 3rd row of the instance `board` (assuming that instance exists)

- Rows run horizontally, left to right
- Columns run vertically, top to bottom
- Major Diagonals run diagonally, top-left to bottom-right
- Minor Diagonals run diagonally, top-right to bottom-left
- In chess the rook piece moves and attacks horizontally (along rows) or vertically (along columns), through any number of unoccupied squares
- In chess the queen piece moves and attacks horizontally (along rows), vertically (along columns), or diagonally (along major and minor diagonals), through any number of unoccupied squares

<img src="https://f.cloud.github.com/assets/1577682/1257423/0f26258e-2ba7-11e3-9808-b39041c2e1a2.png">
<img src="https://f.cloud.github.com/assets/1577682/1257424/0f2e9dcc-2ba7-11e3-82fc-ff8fb7bfc324.png">
<img src="https://f.cloud.github.com/assets/1577682/1257421/0ef7f588-2ba7-11e3-9cbc-577d3ad20bb1.png">
<img src="https://f.cloud.github.com/assets/1577682/1257422/0f127a66-2ba7-11e3-9196-221f65cf03e3.png">
