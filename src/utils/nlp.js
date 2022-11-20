import { containerBootstrap } from "@nlpjs/core";
import { Nlp } from "@nlpjs/nlp";
import { fs } from "@nlpjs/request-rn";

export const setupNLP = async (corpora) => {
  const container = containerBootstrap();
  container.register("fs", fs);
  container.use(Nlp);
  const nlp = container.get("nlp");
  nlp.settings.autoSave = false;
  await nlp.addCorpora(corpora);
  nlp.train();
  return nlp;
};

export const getIntent = async (text, nlp) => {
  const { intent, locale } = await nlp.process(text);
  return { intent, locale };
};
