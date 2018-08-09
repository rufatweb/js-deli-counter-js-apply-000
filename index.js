var katzDeliLineline = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " +  katzDeliLine.length + " in line."
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + currentLine.shift(0) + ".";
  }
}
