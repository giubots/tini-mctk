export const getResponse = (nlpData, kbData, uttData) => {
  const { intent, locale } = nlpData;

  const toHighlight = {};
  const uttKeys = new Set();
  for (const line of kbData) {
    const module = line.module;

    if (!toHighlight[module]) {
      toHighlight[module] = {
        name: module,
        highlighted: false,
        parameters: [],
      };
    }

    const highlighted = intent in line && line[intent] !== "";
    if (line.parameter != "") {
      toHighlight[module].parameters.push({
        name: line.parameter,
        highlighted,
      });
    }
    if (highlighted) {
      toHighlight[module].highlighted = true;
      uttKeys.add(line[intent]);
    }
  }
  if (intent === "None") uttKeys.add("_default");
  return {
    answer: Array.from(uttKeys)
      .map((key) => uttData[locale][key])
      .join(" "),
    highlighted: Object.values(toHighlight),
  };
};
