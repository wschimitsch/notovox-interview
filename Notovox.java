public class Notovox {
    public static void main(String[] args) {
        String str = "";
        for (char letter = 'a'; letter <= 'z'; letter++) {
            str += letter + " ";
            if (str.length() == 13) {
                System.out.println(str + "YO!");
            }
        }
    }
}
