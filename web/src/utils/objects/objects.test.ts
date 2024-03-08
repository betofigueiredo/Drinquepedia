import objects from "./objects";

describe("objects -> transform -> toCamelCase", () => {
  it("should transform simple object to camel case", () => {
    const data = {
      security_time: 30,
      additional_text: "text",
    };
    const result = objects.transform.toCamelCase(data);
    const expected = {
      securityTime: 30,
      additionalText: "text",
    };
    expect(result).toStrictEqual(expected);
  });

  it("should transform recursive array with object to camel case", () => {
    const data = {
      security_time: 30,
      contacts_all: [
        { name: "John", in_active: true, more: [{ not_true: false }] },
        { name: "Lana", on_active: false },
      ],
    };
    const result = objects.transform.toCamelCase(data);
    const expected = {
      securityTime: 30,
      contactsAll: [
        { name: "John", inActive: true, more: [{ notTrue: false }] },
        { name: "Lana", onActive: false },
      ],
    };
    expect(result).toStrictEqual(expected);
  });

  it("should NOT transform array with raw values", () => {
    const data = { text: ["uuids"] };
    const result = objects.transform.toCamelCase(data);
    expect(result).toStrictEqual(data);
  });

  it("should NOT transform raw values", () => {
    const data = "just text";
    const result = objects.transform.toCamelCase(data);
    expect(result).toStrictEqual(data);
  });
});
