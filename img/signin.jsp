<%-- 
    Document   : signin
    Created on : Apr 28, 2014, 9:53:37 PM
    Author     : Lollipop
--%>

<%@page import="DataPackage.Data"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link type="text/css" rel="stylesheet" href="style_signin.css">
        <title>(18) Facebook</title>
        <%! String user,pass;%>
        <% user=request.getParameter("email");
        pass=request.getParameter("pass");
        if (!Data.checkuser(user)||!Data.checkpass(user,pass))
        {
            Cookie user_cookie=new Cookie("user",user); 
            user_cookie.setMaxAge(5);
            if (!Data.checkuser(user))
                    user_cookie=new Cookie("user","Error");
             response.addCookie(user_cookie);
             response.sendRedirect("facebook.jsp");  
        }
		else
		response.sendRedirect("Home.html");
            %>
    </head>
    <body>              
    </body>
</html>
