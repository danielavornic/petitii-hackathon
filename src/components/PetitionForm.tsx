import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Select from "react-select";
import { PetitionFormData } from "types";

const toWhoOptions = [
  { value: "guvern", label: "Guvern" },
  { value: "parlament", label: "Parlament" },
  { value: "presedinte", label: "Președinte" },
  { value: "primar", label: "Primar" },
];

const regionOptions = [
  { value: "mun.chisinau", label: "Mun. Chisinau" },
  { value: "r-n.cahul", label: "R-n. Cahul" },
  { value: "r-n.ungheni", label: "R-n. Ungheni" },
  { value: "r-n.balti", label: "R-n. Balti" },
];

const categories = [
  {
    value: "educatie",
    label: "Educatie",
  },
  {
    value: "mediu",
    label: "Mediu",
  },
  {
    value: "infrastructura",
    label: "Infrastructura",
  },
  {
    value: "dezvoltare",
    label: "Dezvoltare regionala",
  },
  {
    value: "transport",
    label: "Transport",
  },
  {
    value: "energie",
    label: "Energie",
  },
  {
    value: "turism",
    label: "Turism",
  },
  {
    value: "drepturile_animalelor",
    label: "Drepturile animalelor",
  },
  {
    value: "tehnologie",
    label: "Tehnologie",
  },
  {
    value: "agricultura",
    label: "Agricultura",
  },
];

interface PetitionFormProps {
  formData: PetitionFormData;
  setFormData: React.Dispatch<React.SetStateAction<PetitionFormData>>;
  errors: PetitionFormData;
  setErrors: React.Dispatch<React.SetStateAction<PetitionFormData>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PetitionForm = ({
  formData,
  setFormData,
  errors,
  setErrors,
  setIsSubmitted,
}: PetitionFormProps) => {
  const { title, content, Category, region, toWho } = formData;

  const isSubmitDisabled =
    !title ||
    !content ||
    !Category.length ||
    !toWho ||
    ((toWho === "primar" || toWho === "otherValueRequiringRegion") && !region) ||
    !formData.checkedData ||
    !formData.consentedData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "title" && e.target.value.length < 5) {
      setErrors({ ...errors, title: "Titlul trebuie să aibă minim 5 caractere" });
    }

    if (e.target.name === "title" && e.target.value.length >= 5) {
      setErrors({ ...errors, title: "" });
    }

    if (e.target.name === "content" && e.target.value.length < 10) {
      setErrors({ ...errors, content: "Conținutul trebuie să aibă minim 10 caractere" });
    }
  };

  return (
    <form onSubmit={handleSubmit} id="petitie-form">
      <VStack spacing={8} py={8} pb="200px">
        <FormControl>
          <FormLabel>Titlu</FormLabel>
          <Input
            type="text"
            placeholder="Titlu"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
          {errors.title && <FormErrorMessage color="red.500">{errors.title}</FormErrorMessage>}
        </FormControl>

        <FormControl>
          <FormLabel>Conținut</FormLabel>
          <Textarea
            placeholder="Conținut"
            name="content"
            value={content}
            onChange={handleChange}
            h="300px"
            maxLength={2000}
          />
        </FormControl>

        <HStack justifyContent="space-between" w="full" spacing={8}>
          <FormControl>
            <FormLabel>Destinatar</FormLabel>
            <Select
              options={toWhoOptions}
              value={toWhoOptions.find((option) => option.value === toWho)}
              onChange={(option) => setFormData({ ...formData, toWho: option ? option.value : "" })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Regiune</FormLabel>
            <Select
              options={regionOptions}
              isDisabled={toWho !== "primar"}
              value={regionOptions.find((option) => option.value === region)}
              onChange={(option) =>
                setFormData({ ...formData, region: option ? option.value : "" })
              }
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Categorii</FormLabel>
          <Select
            options={categories}
            isMulti
            value={categories.filter((option) => Category.includes(option.value))}
            onChange={(options) =>
              setFormData({ ...formData, Category: options ? options.map((o) => o.value) : [] })
            }
          />
        </FormControl>

        <VStack w="full">
          <FormControl>
            <Checkbox
              name="checkedData"
              checked={formData.checkedData}
              onChange={(e) => setFormData({ ...formData, checkedData: e.target.checked })}
            >
              Am verificat datele introduse şi confirm corectitudinea lor, pe proprie răspundere*
            </Checkbox>
          </FormControl>
          <FormControl>
            <Checkbox
              name="consentedData"
              checked={formData.consentedData}
              onChange={(e) => setFormData({ ...formData, consentedData: e.target.checked })}
            >
              În temeiul articolelor 6, 8, 9 ale Legii nr. 133 din 08.07.2011, îmi exprim
              consimţământul pentru prelucrarea datelor cu caracter personal care mă vizează în
              scopul procesării petiției.*
            </Checkbox>
          </FormControl>
        </VStack>

        <Button
          type="submit"
          colorScheme="blue"
          w="full"
          isDisabled={isSubmitDisabled}
          form="petitie-form"
        >
          Trimite petiția
        </Button>
      </VStack>
    </form>
  );
};
