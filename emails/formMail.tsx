import {
  Body,
  Container,
  Heading,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

type Sender = {
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
}: Sender) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className="p-8 rounded-lg shadow-lg text-center">
            {/* <Img src='/img/logo.png' alt='' /> */}
            <Heading className="text-xl pt-4">
              New message from {fullName} ({email})
            </Heading>
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
