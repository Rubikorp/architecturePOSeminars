package Classes.Rewards.Bronze;

import Classes.IGameItem;
import Classes.ItemGenerator;

public class BronzeFabric extends ItemGenerator {

    @Override
    public IGameItem createItem() {
        return new Bronze();
    }
}
