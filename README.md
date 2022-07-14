# GET_ID_INFO_LINE
Get ID information in line

to use this code, add file .env.gs

```zsh
function setscprop(){
  var LINE_token = {YOUR LINE ACCESS TOKEN};
  
  //save the variable to script property
  var prop = PropertiesService.getScriptProperties();
  prop.setProperty("LINE_TOKEN", LINE_token);
}
```

and make it as library names "ENV"
