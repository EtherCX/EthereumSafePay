pragma solidity ^0.4.14;


/// @dev Models a uint -> address mapping where it is possible to iterate over all keys.
library IterableMapping {
    struct Map {
        mapping(address => IndexValue) data;
        KeyFlag[] keys;
        uint size;
    }
    struct IndexValue { uint keyIndex; uint value; }
    struct KeyFlag { address key; bool deleted; }

    function insert(Map storage self, address key, uint value) returns (bool replaced) {
        uint keyIndex = self.data[key].keyIndex;
        self.data[key].value = value;
        if (replaced = (keyIndex > 0)) {
        } else {
            keyIndex = self.keys.length++;
            self.data[key].keyIndex = keyIndex + 1;
            self.keys[keyIndex].key = key;
            self.size++;
        }
    }

    function remove(Map storage self, address key) returns (bool success) {
        uint keyIndex = self.data[key].keyIndex;
        if (keyIndex == 0)
            return false;
        
        delete self.data[key];
        self.keys[keyIndex - 1].deleted = true;
        self.size--;
    }

    function contains(Map storage self, address key) returns (bool) {
        return self.data[key].keyIndex > 0;
    }

    function iterateStart(Map storage self) returns (uint keyIndex) {
        return iterateNext(self, uint(-1));
    }

    function iterateValid(Map storage self, uint keyIndex) returns (bool) {
        return keyIndex < self.keys.length;
    }

    function iterateNext(Map storage self, uint keyIndex) returns (uint) {
        keyIndex++;
        while (keyIndex < self.keys.length && self.keys[keyIndex].deleted) {
            keyIndex++;
        }
        return keyIndex;
    }

    function iterateGet(Map storage self, uint keyIndex) returns (address key, uint value) {
        key = self.keys[keyIndex].key;
        value = self.data[key].value;
    }
}

