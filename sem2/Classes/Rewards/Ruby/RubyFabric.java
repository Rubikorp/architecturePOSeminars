package Classes.Rewards.Ruby;

import Classes.IGameItem;
import Classes.ItemGenerator;

public class RubyFabric extends ItemGenerator {
    @Override
    public IGameItem createItem() {
        return new Ruby();
    }
}
