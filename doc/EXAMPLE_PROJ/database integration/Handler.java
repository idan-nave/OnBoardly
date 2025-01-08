package handlers;

import java.io.IOException;
import java.io.OutputStream;

import org.json.JSONException;
import org.json.JSONObject;
import com.sun.net.httpserver.HttpExchange;

public class Handler {
	
	private HttpExchange currentExchange;
	private JSONObject jsonObj;
	
	public Handler(HttpExchange exchange) throws IOException {
		this.currentExchange = exchange;
		byte[] data = currentExchange.getRequestBody().readAllBytes();
		String body = new String(data).trim();
		this.jsonObj = new JSONObject(body);
	}
	
    public String getStr(String key) throws IOException {
        return jsonObj.optString(key, "0"); 
    }

    public int getInt(String key) throws IOException {
        return jsonObj.optInt(key, -1);
    }

    public Object getObj(String key) throws IOException {
        return jsonObj.get(key);
    }

    public void sendMsg(String res, int statusCode) throws IOException {
        currentExchange.sendResponseHeaders(statusCode, res.length());
        try (OutputStream os = currentExchange.getResponseBody()) {
            os.write(res.getBytes());
        }
    }
    
    public boolean hasKey(String key) throws IOException {
        return jsonObj.has(key);
    }
}
