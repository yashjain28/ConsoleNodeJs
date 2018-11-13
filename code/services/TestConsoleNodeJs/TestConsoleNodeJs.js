function TestConsoleNodeJs(req, resp) {
  // Just Make sure the library is imported in the top right corner. 
  const ob = {
    "Welcome":"to",
    "ClearBlade":{
      "Austin":"Texas"
    }
  };

  console.log("Hi", "there,", ob, "at", 78705); //Logs: Hi there, {"Welcome":"to","ClearBlade":{"Austin":"Texas"}} at 78705

  resp.success('Success');
}
