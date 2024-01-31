// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    // sample data to return
    const assets = [
      {
        id: 1,
        name: 'Swingy McBridge',
        description: 'This is asset 1',
        type: 'Bridge',
      },

      {
        id: 2,
        name: 'Asset 2',
        description: 'This is asset 2',
        type: 'Atomated Lock',
      }
    ]
    return { statusCode: 200, body: JSON.stringify(assets) }

  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
