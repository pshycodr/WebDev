var display = "";

function OnStart()
{
   var data =	["C", "⌫", "/", "*", 9, 8, 7, "-", 6, 5, 4, "+", 3, 2, 1, "⋯", "%", 0, "Π", "."]

   cqLay = app.CreateLayout("Linear", "HCenter, FillXY");
   
   cqDisplay =	app.CreateText("", 1, 0.4, "Singleline");
   cqDisplay.SetTextColor( "#efefee" );
   cqDisplay.SetTextSize(74);
   cqDisplay.SetFontFile("Misc/ArminSoft-Regular.ttf");
   cqDisplay.SetPadding(0, 0.1, 0, 0.1);
   cqDisplay.Hide();
   cqLay.AddChild(cqDisplay);
   
   app.AddLayout(cqLay);
   
   cqBtnLay1 =	app.CreateLayout("Linear","Horizontal");
   for(r =	0; r <	4; r++) MakeBtn(cqBtnLay1, data[r]);
   cqLay.AddChild(cqBtnLay1);
   
   cqBtnLay2 =	app.CreateLayout("Linear", "Horizontal");
   for(r =	4; r <	8; r++) MakeBtn(cqBtnLay2, data[r]);
   cqLay.AddChild(cqBtnLay2);
   
   cqBtnLay3 =	app.CreateLayout("Linear", "Horizontal");
   for(r =	8; r <	12; r++) MakeBtn(cqBtnLay3, data[r]);
   cqLay.AddChild(cqBtnLay3);
   
   cqBtnLay4 =	app.CreateLayout("Linear", "Horizontal");
   for(r =	12; r <	16; r++) MakeBtn(cqBtnLay4, data[r]);
   cqLay.AddChild(cqBtnLay4);
   
   cqBtnLay5 =	app.CreateLayout("Linear", "Horizontal");
   for(r =	16; r <	20; r++) MakeBtn(cqBtnLay5, data[r]);
   cqLay.AddChild(cqBtnLay5);
   
   cqBtnLay6 = app.CreateLayout("Linear", "Horizontal");
   MakeBtn(cqBtnLay6, "=")
   cqLay.AddChild(cqBtnLay6);
}

function MakeBtn(cqLay, name)
{
   if(name ==	"=") w = 1, bc =	"#fe0000", c =	"#efefee";  
   
   else if(name ==	"/") bc =	"#454545", c =	"#efefee"; 
   
   else if(name ==	"*") bc =	"#454545", c =	"#efefee";
   
   else if(name ==	"-") bc =	"#454545", c =	"#efefee";
   
   else if(name ==	"+") bc =	"#454545", c =	"#efefee";
   
   else if(name ==	"⌫") bc =	"#ab2828", c =	"#efefee";
   
   else if(name == "⋯") bc =	"#4cbdff", c =	"#efefee";
   
   else if(name ==	".") bc ="#ab2828", c =	"#efefee";
   
   else w =	0.25, bc =	"#efeefe", c =	"#454545";
   
   cqBtn =	app.CreateButton(name, w, 0.1);
   cqBtn.SetOnTouch(OnBtnTouch);
   cqBtn.SetFontFile("Misc/ArminSoft-Regular.ttf");
   cqBtn.SetTextSize(26);
   cqBtn.SetTextColor(c);
   cqBtn.SetStyle(bc, bc, 2,  null, 0, 0);
   cqBtn.Animate("ZoominEnter", null, 400);
   app.SetBackColor("#000100");
   cqLay.AddChild(cqBtn);
}

function OnBtnTouch()
{
   cqBtn =	this;
   var string =	cqBtn.GetText();
   
   if(string ==	"=") OnResult();
   
   else if(string == "C") display =	"";
   
   else if(string == "⌫") display = display.slice(0, -1);
   
   else if(string ==	"%") display  *= 0.01;
   
   else if(string ==	"Π") display *= 3.14;
   
   else if(string ==	"⋯") SetMessage();
   
   else display += string;
   
   cqDisplay.SetText(display);
   cqDisplay.Animate("Jelly", null, 500);
}

function OnResult()
{
   try 
   {
     display =	eval(display).toFixed(4);
   }
   catch (e) {display =	"Input Error"}
}

function SetMessage()
{
   alrtDlg = app.CreateDialog("Oops!", "NoCancel, Old");
   alrtDlg.SetSize(0.9, 0.3);
   alrtDlg.SetBackColor("#fe2828");
   alrtDlg.SetTitleHeight(48);
   alrtDlg.SetTitleTextSize(22);
   alrtDlg.SetTitleColor("#efefee");
   alrtDlg.SetTitleDividerColor("#454545");
   alrtDlg.SetTitleDividerHeight(2);
   
   alrtLay =	app.CreateLayout("Linear", "VCenter, FillXY");
   alrtLay.SetBackColor( "#454545" );
   alrtLay.SetBackAlpha(1);
   alrtLay.SetPadding(0, 0.01, 0, 0.01);
   alrtDlg.AddLayout(alrtLay);
   
   alrtMsg =	app.AddText(alrtLay, "Sorry this More Options are not currently available right now, I hope I develop this feature as soon as possible as I can. PLEASE BEAR WITH US!", 0.8, null, "Middle, Multiline");
   alrtMsg.SetFontFile("Misc/ArminSoft-Regular.ttf");
   alrtMsg.SetTextColor( "#efefee" );
   alrtMsg.SetTextSize(20);
  
   alrtBtn = app.AddButton(alrtLay, "OK", 0.8, null, " Singleline");
   alrtBtn.SetOnTouch(OnOkTouch);
   alrtBtn.SetFontFile("Misc/ArminSoft-Regular.ttf");
   alrtBtn.SetStyle("#454545", "#454545", 0, null, 0,  0);
   alrtBtn.SetSize(1, 0.08);
   
   alrtDlg.Show();
}

function OnOkTouch()
{
   alrtDlg.Dismiss();
}