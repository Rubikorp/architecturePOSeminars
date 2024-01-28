package Classes.Rewards.Platinum;

import Classes.IGameItem;

public class Platinum implements IGameItem {
    @Override
    public void open() {
        System.out.println("Platinum!");
    }
}
