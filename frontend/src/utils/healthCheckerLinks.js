import GrammarCheckerIcon from "../../public/grammar-checker-icon.svg";
import PlagiarismCheckerIcon from "../../public/plagiarism-icon.svg";

import TextSummarizerIcon from "../../public/text-summarizer-icon.svg";
import vocabularyChecker from "../../public/vocubary-icon.svg";

import upload from "../../public/upload-icon.svg";
import TranslatorIcon from "../../public/translator-icon.svg";
const links = [
  {
    name: "Grammar Checker",
    href: "/grammar-checker",
    icon: GrammarCheckerIcon,
    backgroundColor: "bg-orange-1",
    borderColor: "!border-b-orange-1",
  },

  {
    name: "Text Summarizer",
    href: "/text-summarizer",
    icon: TextSummarizerIcon,
    backgroundColor: "bg-purple-500",
    borderColor: "!border-b-purple-500",
  },
  {
    name: "Vocabulary",
    href: "/vocabulary-checker",
    icon: vocabularyChecker,
    backgroundColor: "bg-green-500",
    borderColor: "!border-b-green-500",
  },
  {
    name: "Plagiarism",
    href: "/plagiarism-checker",
    icon: PlagiarismCheckerIcon,
    backgroundColor: "bg-blue-1",
    borderColor: "!border-b-blue-1",
  },
  {
    name: "File Upload",
    href: "/pdf-upload",
    icon: upload,
    backgroundColor: "bg-yellow-500",
    borderColor: "!border-b-yellow-500",
  },
  {
    name: "Translator",
    href: "/translator",
    icon: TranslatorIcon,
    backgroundColor: "bg-red-500",
    borderColor: "!border-b-red-500",
  },
];

export default links;
