var line = [];
function takeANumber(katzDeliLine, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " +  line.length + " in line."
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + currentLine.shift(0) + ".";
  }
}
