package Classes.Rewards.Sapphire;

import Classes.IGameItem;
import Classes.ItemGenerator;

public class SapphireFabric extends ItemGenerator {
    @Override
    public IGameItem createItem() {
        return new Sapphire();
    }
}
