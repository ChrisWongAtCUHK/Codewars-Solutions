public class Solution {
	public static String repeatStr(final int repeat, final String string) {
		if(repeat <= 0) return "";
 		return String.format("%0" + repeat + "d", 0).replace("0", string);
	}
}
