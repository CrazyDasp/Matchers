import { changeRotation } from "../app";


const testCharacterList = [
    {name: "shaman", health: 42},
    {name: "priest", health: 57},
    {name: "warrior", health: 100},
    {name: "mage", health: 23},
    {name: "paladin", health: 1}
];

test("Testing changing position in character list by HP", () => {
    const result = changeRotation(testCharacterList);

    const changedResult = [
        {name: "warrior", health: 100},
        {name: "priest", health: 57},
        {name: "shaman", health: 42},
        {name: "mage", health: 23},
        {name: "paladin", health: 1}
    ]

    expect(result).toEqual(changedResult)

})