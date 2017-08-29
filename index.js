var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var updatedObj = Object.assign({key : value}, obj)
  return updatedObj
}
