import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Terms of Service | Media Control Agency",
};

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="pt-28 mb-14">
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="Terms of Service" />
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-8 font-bold antialiased">
            General Terms and Conditions
          </h1>
        </div>

        <div>
          <p>
            For the initiation of business relations, the processing of orders
            and the execution of contracts between Media Control Agency and
            customers as well as potential customers (both hereinafter referred
            to as "Business Partners"), the following applies in addition to our
            privacy policy with regard to the exchange of information and data
            (hereinafter referred to as "Confidential Information"):
          </p>
          <p className="pt-6">
            1. Media Control Agency and “Business Partners” (the "Parties") will
            at any time take all possible and reasonable measures to ensure
            information security and protection of sensitive information. The
            parties are obliged to secrecy in respect of the following terms
            (hereinafter referred to as “Terms”).
          </p>
          <p className="pt-6">
            2. Media Control Agency and its “Business Partner” have an interest
            in sharing information, checking data and facilitating discussions.
            Both parties will attach great importance to the mutual protection
            of information and will treat it confidentially at all times.
          </p>
          <p className="pt-6">
            {" "}
            3. “Confidential Information” includes, but is not limited to:
          </p>
          <ul>
            <li>
              <strong>(a)</strong> business plans, methods and practices;
            </li>
            <li>
              <strong>(b)</strong> information regarding personnel, customers
              and suppliers;
            </li>
            <li>
              <strong>(c)</strong> inventions, processes, methods, products,
              patent applications and other intellectual property rights;
            </li>
            <li>
              <strong>(d)</strong> specifications, drawings, sketches, models,
              samples, tools, computer programs, technical information, software
              codes and other corresponding or related information.
            </li>
          </ul>
          <p className="pt-6">
            4. Each party will mark “Confidential Information” as protected and
            confidential in case of doubt. In the case of information disclosed
            orally or in written materials that are not marked as confidential,
            secrecy shall only apply in cases where it is obviously a matter of
            secrets or insofar as the necessity for confidentiality is pointed
            out subsequently. Notification of the protected and confidential
            nature of the information may be given orally, by e-mail, in written
            correspondence or, if necessary, by other means of communication.
          </p>
          <p className="pt-6">
            5. As soon as the receiving party ("Recipient") is informed of the
            proprietary and confidential nature of the “Confidential
            Information” disclosed by the other party, the “Recipient” shall
            refrain from disclosing such “Confidential Information” to other
            third parties without the prior written consent of the disclosing
            Party. The “Recipient” shall protect such “Confidential Information”
            from inadvertent disclosure to a third party, using the same care
            and diligence as it uses to protect its own proprietary and
            confidential information, but in no event less than reasonable
            care.“Recipient” shall ensure that any of its employees, officers,
            directors or agents who have access to the “Confidential
            Information” disclosed under these “Terms” are informed of its
            proprietary and confidential nature and are required to comply with
            these “Terms”. The “Recipient” of “Confidential Information”
            disclosed under these “Terms” shall promptly notify the disclosing
            party of any further disclosure of such “Confidential Information”
            in violation of this Agreement or of any subpoena or other legal
            process requiring the submission or disclosure of such “Confidential
            Information”. Media Control Agency is entitled to pass on
            “Confidential Information” to particularly trustworthy
            subcontractors for the processing of orders from the “Business
            Partner” and/or implementation/execution of the contract with the
            “Business Partner”. These subcontractors are bound to secrecy
            comparable to the conditions set out in these “Terms”.
          </p>
          <p className="pt-6">
            6. All “Confidential Information” disclosed under these “Terms”
            shall be and remain the property of the disclosing Party, and
            nothing in this Agreement shall be construed to grant or transfer
            any rights in such “Confidential Information” to the other Party.
            The “Recipient” shall comply with any request by the disclosing
            Party to promptly return or destroy all copies of the “Confidential
            Information” disclosed under these “Terms” and any notes relating to
            “Confidential Information”.
          </p>
          <p className="pt-6">
            7. Nothing in these “Terms” shall be construed to limit the right of
            either Party to independently develop or acquire products without
            using the other Party's “Confidential Information”. The disclosing
            Party acknowledges that the recipient may currently or in the future
            be developing information internally or may receive from other
            parties information similar to the “Confidential Information”.
            Nothing in these “Terms” prohibits “Recipient” from developing or
            having developed products, concepts, systems or techniques similar
            to or competing with the products, concepts, systems or techniques
            considered or contained in the “Confidential Information”, provided
            that “Recipient” does not breach any of its obligations under these
            “Terms” in connection with such development.
          </p>
          <p className="pt-6">
            8. Notwithstanding the foregoing, the parties agree that information
            shall not be considered “Confidential Information” and the recipient
            shall not be required to keep such information confidential if such
            information:
          </p>

          <ul>
            <li>
              <strong>(a)</strong> is already known to the recipient because it
              has been disclosed to him by a third party, without that third
              party being under any obligation of confidentiality to the
              disclosing party;
            </li>
            <li>
              <strong>(b)</strong> is or becomes publicly known without the
              recipient, its employees, officers, directors or agents having
              acted unlawfully;
            </li>
            <li>
              <strong>(c)</strong> is developed independently by the recipient
              and without reference to the confidential information disclosed
              herein;
            </li>
            <li>
              <strong>(d)</strong> is authorized for release (and only to the
              extent authorized by the disclosing party)
            </li>
            <li>
              <strong>(e)</strong> if disclosure is required by the law, court
              or governmental authority.
            </li>
          </ul>

          <p className="pt-6">
            9. Nothing in these “Terms” shall be construed to constitute an
            agency, partnership, joint venture or similar relationship between
            the “Parties”.
          </p>
          <p className="pt-6">
            10. These “Terms” contain the entire agreement between the parties
            regarding secrecy and in no way creates an obligation for either
            party to disclose any information to the other party or otherwise.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
