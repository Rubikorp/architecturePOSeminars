package Classes.Rewards.Platinum;

import Classes.IGameItem;
import Classes.ItemGenerator;

public class PlatinumFabric extends ItemGenerator {

    @Override
    public IGameItem createItem() {
        return new Platinum();
    }
}
