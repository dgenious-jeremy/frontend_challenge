interface JsonItemInterface {
    name: string;
    id: number;
    amount: number;
};

interface JsonGroupInterface {
    name: string;
    items: Array<JsonItemInterface>;
};

interface JsonInterface extends Array<JsonGroupInterface> {
};

export type {
    JsonInterface,
    JsonGroupInterface,
    JsonItemInterface
};