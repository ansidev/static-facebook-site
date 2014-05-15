package DataPackage;



/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Lollipop
 */
import java.util.HashMap;

public class Data {
    public static HashMap<String, String>  accounts;
    static void init()
    {
        accounts= new HashMap<>();
        accounts.put("user01@gmail.com", "user01");
        accounts.put("user02@gmail.com", "user02");
        accounts.put("user03@gmail.com", "user03");
        accounts.put("user04@gmail.com", "user04");
        accounts.put("user05@gmail.com", "user05");
    }
    public static void addAccount(String user, String pass)
    {
        if (accounts==null)
            init();
        accounts.put(user,pass);
    }
    public static boolean checkpass(String user, String pass)
    {
        if (accounts==null)
            init();
        return pass.equals(accounts.get(user));
    }
    public static boolean checkuser(String user)
    {
        if (accounts==null)
            init();
        return accounts.get(user)!=null;
    }
    
}
