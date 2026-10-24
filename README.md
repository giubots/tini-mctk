# TINI - MCTK

This is a Vue component that adds a multi-modal troubleshooting conversational agent, suitable for small applications.
It is easy to configure and supports multiple languages.

## Cite this work

[**MCTK: a Multi-modal Conversational Troubleshooting Kit for supporting users in web applications**](https://dl.acm.org/doi/10.1145/3531073.3534480)

Giulio Antonio Abbo, Pietro Crovari, Sara Pidò, Pietro Pinoli, and Franca Garzotto. 2022. MCTK: a Multi-modal Conversational Troubleshooting Kit for supporting users in web applications. In Proceedings of the 2022 International Conference on Advanced Visual Interfaces (AVI '22). Association for Computing Machinery, New York, NY, USA, Article 55, 1–3. https://doi.org/10.1145/3531073.3534480

```bibtex
@inproceedings{abbo2022mctk,
author = {Abbo, Giulio Antonio and Crovari, Pietro and Pid\`{o}, Sara and Pinoli, Pietro and Garzotto, Franca},
title = {MCTK: a Multi-modal Conversational Troubleshooting Kit for supporting users in web applications},
year = {2022},
isbn = {9781450397193},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3531073.3534480},
doi = {10.1145/3531073.3534480},
abstract = {Conversational Interfaces for user assistance are becoming persuasive. Today, though, most chatbots are not integrated into the application in which they are placed, but only superimposed, with no communication between the conversational and the graphical interface. We propose Multi-modal Conversational Troubleshooting Kit (MCTK), a Python package to easily integrate a conversational agent for troubleshooting in web applications. MCTK is multi-modal: once the system recognizes the problem the user is encountering, the textual solution in the chat is coupled with visual hints in the GUI. On top of that, MCTK is easy to configure and offers separation of concerns: dialogue designers can work on the conversation without the necessity of modifying the code, and vice versa.},
booktitle = {Proceedings of the 2022 International Conference on Advanced Visual Interfaces},
articleno = {55},
numpages = {3},
location = {Frascati, Rome, Italy},
series = {AVI '22}
}
```

[**Enhancing Conversational Troubleshooting with Multi-modality: Design and Implementation**](https://link.springer.com/chapter/10.1007/978-3-031-25581-6_7)

Giulio Antonio Abbo, Pietro Crovari, and Franca Garzotto. 2023. Enhancing Conversational Troubleshooting with Multi-modality: Design and Implementation. In Chatbot Research and Design (CONVERSATIONS '22). Springer International Publishing, Cham, 103–117. https://doi.org/10.1007/978-3-031-25581-6_7

```bibtex
@InProceedings{10.1007/978-3-031-25581-6_7,
author="Abbo, Giulio Antonio
and Crovari, Pietro
and Garzotto, Franca",
editor="F{\o}lstad, Asbj{\o}rn
and Araujo, Theo
and Papadopoulos, Symeon
and Law, Effie L.-C.
and Luger, Ewa
and Goodwin, Morten
and Brandtzaeg, Petter Bae",
title="Enhancing Conversational Troubleshooting with Multi-modality: Design and Implementation",
booktitle="Chatbot Research and Design",
year="2023",
publisher="Springer International Publishing",
address="Cham",
pages="103--117",
abstract="Conversational troubleshooting is an increasingly popular technology that consists in utilising dialogue agents to support users of a system through a conversation-based question-answering process, typically through a chatbot. Despite their widespread use, current troubleshooting technologies lack a thorough integration with the applications on which they are overlaid, as they rely only on text to help the users. In this paper, we present TINI, an open-source conversational troubleshooting tool that is multi-modal and multilingual, relies on simple configuration files, and is ready to be deployed in web applications. Users can ask questions to the conversational agent explaining the issue faced; the system analyses it together with the interaction's context to locate the root problem. Finally, it proposes a solution which engages the user multi-modally: with text in the chat and hints in the graphical interface. A table-based configuration improves system maintainability and enables dialogue designers and field experts to work on the conversation without any coding experience required.",
isbn="978-3-031-25581-6"
}
```

## Credits

This builds on [vue-beautiful-chat](https://github.com/mattmezza/vue-beautiful-chat) for the chat panel and [NLP.js](https://github.com/axa-group/nlp.js/) for intent extraction and language recognition. 
The example uses [TUI Image Editor](https://github.com/nhn/tui.image-editor).
