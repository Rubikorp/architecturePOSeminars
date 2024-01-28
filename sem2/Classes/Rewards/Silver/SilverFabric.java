package Classes.Rewards.Silver;

import Classes.IGameItem;
import Classes.ItemGenerator;

public class SilverFabric extends ItemGenerator {
    @Override
    public IGameItem createItem() {
        return new Silver();
    }
}
