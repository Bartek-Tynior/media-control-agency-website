import {
  Body,
  Container,
  Heading,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

type leadInformation = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  company: string;
};

export default function FormMail({
  fullName,
  email,
  phone,
  message,
  company,
}: leadInformation) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className="p-8 border-white/10 rounded-lg shadow-lg text-center">
            <Heading className="text-2xl pt-4">
              There is a new reach out from {fullName} | {email}
            </Heading>
            <Heading className="text-lg pt-4">Message</Heading>
            <Text className="text-lg font-medium text-gray-700">{message}</Text>
            <Heading className="text-lg pt-4">Contact details</Heading>
            <Text className="text-lg font-medium text-gray-700">
              Company: {company}
            </Text>
            <Text className="text-lg font-medium text-gray-700">
              Phone: {phone}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
