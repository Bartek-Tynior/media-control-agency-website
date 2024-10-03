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
        <Body className="bg-[#0f0f0f] my-12 mx-auto font-sans">
          <Container className="p-8 bg-white border-white/10 rounded-lg shadow-lg text-center">
            <Heading className="text-2xl pt-4 text-[#333] font-bold">
              New Reach Out from {fullName}
            </Heading>
            <Text className="text-lg pt-2 text-[#666]">Email: {email}</Text>
            <Heading className="text-lg pt-4 text-[#444] font-semibold">
              Message
            </Heading>
            <Text className="text-lg font-medium text-gray-700">{message}</Text>
            <Heading className="text-lg pt-4 text-[#444] font-semibold">
              Contact Details
            </Heading>
            <Text className="text-lg font-medium text-gray-700">
              Company: {company}
            </Text>
            <Text className="text-lg font-medium text-gray-700">
              Phone: {phone}
            </Text>
            <a
              href={`mailto:${email}`}
              className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Reply to {fullName}
            </a>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
