"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Lenis from "lenis";
import Head from "next/head";
import { useEffect } from "react";

export const metadata = {
  title: "Privacy Policy | Media Control Agency",
};

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy | Media Control Agency</title>
        <meta
          name="description"
          content="Learn about our Privacy Policy, how we collect, use, and protect your personal information at Media Control Agency."
        />
        <meta
          property="og:title"
          content="Privacy Policy | Media Control Agency"
        />
        <meta
          property="og:description"
          content="Learn about our Privacy Policy and how we handle your data at Media Control Agency."
        />
        <meta
          property="og:url"
          content="https://media-control-agency.com/privacy-policy"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy | Media Control Agency"
        />
        <meta
          name="twitter:description"
          content="Learn about how we collect, use, and protect your personal information at Media Control Agency."
        />
      </Head>
      <MaxWidthWrapper>
        <div className="pt-28 mb-14">
          <div className="flex flex-col gap-5">
            <SectionLabel sectionName="Privacy Policy" />
            <h1 className="text-2xl mb-8 font-bold antialiased">
              Privacy Policy of Media Control Agency
            </h1>
          </div>

          <div className="text-sm">
            <p>
              The following Privacy Policy specifies
              <strong>
                {" "}
                rules for saving and accessing data on Users&apos; Devices{" "}
              </strong>
              using the Website for the purpose of providing electronic services
              by the Administrator and
              <strong>
                {" "}
                rules for collecting and processing Users&apos; personal data{" "}
              </strong>
              which were provided by them personally and voluntarily through the
              tools available on the Website.
            </p>
            <p>
              The following Privacy Policy is an integral part{" "}
              <a href="">Regulations of the Website</a> which defines the rules,
              rights and obligations of Users using the Website.
            </p>

            <h2 className="text-xl py-6 font-bold">§1 Definitions</h2>
            <ul role="list">
              <li>
                <strong>Service</strong> - the website &quot;Media Control
                Agency&quot; operating at{" "}
                <a href="https://media-control-agency.com/">
                  https://media-control-agency.com/
                </a>
              </li>
              <li>
                <strong>External service</strong> - websites of partners,
                service providers or recipients cooperating with the
                Administrator
              </li>
              <li>
                <strong>Website / Data Administrator</strong> - The Website
                Administrator and the Data Administrator (hereinafter the
                Administrator) is the company &quot;Media Control Agency&quot;,
                operating at the address: Narcis 7, 1619 BC Andijk, with the tax
                identification number: NL004874490B47, providing services
                electronically via the Website
              </li>
              <li>
                <strong>User</strong> - a natural person for whom the
                Administrator provides services electronically via the Website.
              </li>
              <li>
                <strong>Device</strong> - an electronic device with software
                through which the User gains access to the Website
              </li>
              <li>
                <strong>Cookies (cookies)</strong> - text data collected in the
                form of files placed on the User&apos;s Device
              </li>
              <li>
                <strong>GDPR</strong> - Regulation (EU) 2016/679 of the European
                Parliament and of the Council of 27 April 2016 on the protection
                of individuals with regard to the processing of personal data
                and on the free movement of such data, and repealing Directive
                95/46 / EC (General Data Protection Regulation )
              </li>
              <li>
                <strong>Personal data</strong> - means information relating to
                an identified or identifiable natural person (&quot;data
                subject&quot;); an identifiable natural person is a person who
                can be directly or indirectly identified, in particular on the
                basis of an identifier such as name and surname, identification
                number, location data, internet identifier or one or more
                specific physical, physiological, genetic, mental factors, the
                economic, cultural or social identity of a natural person
              </li>
              <li>
                <strong>Processing</strong> - means an operation or a set of
                operations performed on personal data or sets of personal data
                in an automated or non-automated manner, such as collecting,
                recording, organizing, organizing, storing, adapting or
                modifying, downloading, viewing, using, disclosing by sending,
                distributing or otherwise sharing, matching or combining,
                limiting, deleting or destroying;
              </li>
              <li>
                <strong>Restriction of processing</strong> - means the marking
                of stored personal data with the aim of limiting their
                processing in the future
              </li>
              <li>
                <strong>Profiling</strong> - means any form of automated
                processing of personal data, which consists in the use of
                personal data to evaluate certain personal factors of a natural
                person, in particular to analyze or forecast aspects related to
                the effects of that natural person&apos;s work, economic
                situation, health, personal preferences, interests, reliability,
                behavior, location or movement
              </li>
              <li>
                <strong>Agreement</strong> - the consent of the data subject
                means a voluntary, specific, informed and unambiguous
                demonstration of the will, which the data subject, in the form
                of a declaration or a clear affirmative action, allows the
                processing of personal data concerning him
              </li>
              <li>
                <strong>Breach of personal data protection</strong> - means a
                breach of security leading to accidental or unlawful
                destruction, loss, modification, unauthorized disclosure or
                unauthorized access to personal data transmitted, stored or
                otherwise processed
              </li>
              <li>
                <strong>Pseudonymization</strong> - means the processing of
                personal data in such a way that they can no longer be
                attributed to a specific data subject without the use of
                additional information, provided that such additional
                information is kept separate and is subject to technical and
                organizational measures that prevent their being attributed to
                an identified or possible to be identified by a natural person
              </li>
              <li>
                <strong>Anonymization</strong> - Data anonymization is an
                irreversible process of data operations that destroys /
                overwrites &quot;personal data&quot;, making it impossible to
                identify or associate a given record with a specific user or
                natural person.
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">
              §2 Data Protection Inspector
            </h2>
            <p>
              Pursuant to Art. 37 of the GDPR, the Controller has not appointed
              a Data Protection Officer.
            </p>
            <p>
              In matters relating to the processing of data, including personal
              data, please contact the Administrator directly.
            </p>

            <h2 className="text-xl py-6 font-bold">§3 Types of Cookies</h2>
            <ul role="list">
              <li>
                <strong>Internal cookies</strong> - files uploaded and read from
                the User&apos;s Device by the Website&apos;s IT system
              </li>
              <li>
                <strong>External cookies</strong> - files uploaded and read from
                the User&apos;s Device by ICT systems of external websites. The
                scripts of external websites that may place cookies on the
                User&apos;s Devices have been consciously placed on the Website
                through scripts and services made available and installed on the
                Website
              </li>
              <li>
                <strong>Session cookies</strong> - files uploaded and read from
                the User&apos;s Device by the Website during one session of a
                given Device. After the session ends, the files are removed from
                the User&apos;s Device.
              </li>
              <li>
                <strong>Persistent cookies</strong> - files uploaded and read
                from the User&apos;s Device by the Website until you delete them
                manually. The files are not deleted automatically after the end
                of the Device session, unless the configuration of the
                User&apos;s Device is set to the Cookie deletion mode after the
                end of the Device session.
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">§4 Data storage security</h2>
            <ul role="list">
              <li>
                <strong>Cookie storage and reading mechanisms</strong> - The
                mechanisms for storing, reading and exchanging data between
                Cookies saved on the User&apos;s Device and the Website are
                implemented through the built-in mechanisms of web browsers and
                do not allow the collection of other data from the User&apos;s
                Device or data of other websites visited by the User, including
                personal data or information confidential. It is also
                practically impossible to transfer viruses, Trojans and other
                worms to the User&apos;s Device.
              </li>
              <li>
                <strong>Internal cookie</strong> - Cookie files used by the
                Administrator are safe for Users&apos; Devices and do not
                contain scripts, content or information that may threaten the
                security of personal data or the security of the Device used by
                the User.
              </li>
              <li>
                <strong>External cookies</strong> - The Administrator takes all
                possible actions to verify and select website partners in the
                context of Users&apos; safety. The administrator selects
                well-known, large partners with global social trust for
                cooperation. However, it does not have full control over the
                content of Cookie files from external partners. The
                Administrator is not responsible for the security of Cookie
                files, their content and the use in accordance with the license
                by the Scripts installed on the website, coming from external
                websites, to the extent permitted by law. The list of partners
                is provided further in the Privacy Policy.
              </li>
              <li>
                <strong>Cookie control</strong>
              </li>
              <li>
                The user may at any time independently change the settings for
                saving, deleting and accessing the data of saved cookies by each
                website
              </li>
              <li>
                Information on how to disable cookies in the most popular
                computer browsers is available at:{" "}
                <a
                  href="https://nety.pl/jak-wylaczyc-pliki-cookie/"
                  target="_blank"
                >
                  how to disable cookies
                </a>{" "}
                or at one of the indicated suppliers:
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=pl"
                  target="_blank"
                >
                  Managing cookies in the browser <strong>Chrome</strong>
                </a>
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://help.opera.com/pl/latest/web-preferences/"
                  target="_blank"
                >
                  Managing cookies in the browser <strong>Opera</strong>
                </a>
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://support.mozilla.org/pl/kb/blokowanie-ciasteczek"
                  target="_blank"
                >
                  Managing cookies in the browser <strong>FireFox</strong>
                </a>
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://support.microsoft.com/pl-pl/help/4027947/microsoft-edge-delete-cookies"
                  target="_blank"
                >
                  Managing cookies in the browser <strong>Edge</strong>
                </a>
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                  target="_blank"
                >
                  Managing cookies in the browser <strong>Safari</strong>
                </a>
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://windows.microsoft.com/pl-pl/internet-explorer/delete-manage-cookies#ie=ie-11"
                  target="_blank"
                >
                  Managing cookies in the browser{" "}
                  <strong>Internet Explorer 11</strong>
                </a>
              </li>
              <li>
                The User may at any time delete any Cookie files saved so far
                using the User&apos;s Device tools through which the User uses
                the Website&apos;s services.
              </li>
              <li>
                <strong>The threats on the part of the User </strong>- The
                administrator uses all possible technical measures to ensure the
                security of data placed in cookie files. However, it should be
                noted that ensuring the security of this data depends on both
                parties, including the User&apos;s activity. The Administrator
                is not responsible for interception of this data, impersonation
                of the User&apos;s session or their removal as a result of the
                User&apos;s conscious or unconscious activity, viruses, Trojan
                horses and other spyware, which may or may have been an infected
                User&apos;s Device. In order to protect against these threats,
                users should adhere to{" "}
                <a href="https://nety.pl/cyberbezpieczenstwo/" target="_blank">
                  recommendations for using the network
                </a>
                .
              </li>
              <li>
                <strong>Storage of personal data</strong> - The administrator
                ensures that he makes every effort to ensure that the processed
                personal data entered voluntarily by Users are safe, access to
                them is limited and carried out in accordance with their
                intended use and processing purposes. The administrator also
                ensures that he makes every effort to protect his data against
                loss, by using appropriate physical and organizational
                safeguards.
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">
              §5 Purposes for which Cookie files are used
            </h2>
            <ul role="list">
              <li>Improving and facilitating access to the Website</li>
              <li>Personalization of the Website for Users</li>
              <li>Advertising serving services</li>
              <li>
                Keeping statistics (users, number of visits, types of devices,
                connection, etc.)
              </li>
              <li>Provision of multimedia services</li>
            </ul>

            <h2 className="text-xl py-6 font-bold">
              §6 Purposes of personal data processing
            </h2>
            <p>
              Personal data voluntarily provided by Users are processed for one
              of the following purposes:
            </p>
            <ul role="list">
              <li>&bull; Implementation of electronic services:</li>
              <li>
                &bull; Administrator&apos;s communication with Users on matters
                related to the Website and data protection
              </li>
              <li>
                &bull; Ensuring the legitimate interest of the Administrator
              </li>
            </ul>
            <p>
              Data about Users collected anonymously and automatically are
              processed for one of the following purposes:
            </p>
            <ul role="list">
              <li>&bull; Keeping statistics</li>
              <li>
                &bull; Serving advertisements tailored to the Users&apos;
                preferences
              </li>
              <li>
                &bull; Ensuring the legitimate interest of the Administrator
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">
              §7 Cookies of external websites
            </h2>
            <p>
              The Administrator on the Website uses javascript scripts and web
              components of partners who may place their own cookies on the
              User&apos;s Device. Remember that in your browser settings you can
              decide for yourself about the allowed cookies that can be used by
              individual websites. Below is a list of partners or their services
              implemented on the Website that may place cookies:
            </p>
            <ul role="list">
              <li>
                <strong>Ad serving services and affiliate networks:</strong>
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://policies.google.com/privacy?hl=pl"
                  target="_blank"
                >
                  Google Adsense
                </a>
              </li>
              <li>
                <strong>Keeping statistics:</strong>
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://policies.google.com/privacy?hl=pl"
                  target="_blank"
                >
                  Google Analytics
                </a>
              </li>
              <li>
                &bull;{" "}
                <a href="https://automattic.com/privacy/" target="_blank">
                  WordPress Stats (Automattic Inc.)
                </a>
              </li>
            </ul>
            <p>
              Services provided by third parties are beyond the
              Controller&apos;s control. These entities may at any time change
              their terms of service, privacy policy, the purpose of data
              processing and the methods of using cookies.
            </p>

            <h2 className="text-xl py-6 font-bold">
              §8 Types of collected data
            </h2>
            <p>
              The website collects data about Users. Some data is collected
              automatically and anonymously, and some data is personal data
              provided voluntarily by Users when subscribing to individual
              services offered by the Website.
            </p>
            <p>
              <strong>Anonymous data collected automatically:</strong>
            </p>
            <ul role="list">
              <li>&bull; IP address</li>
              <li>&bull; Browser type</li>
              <li>&bull; Screen resolution</li>
              <li>&bull; Approximate location</li>
              <li>&bull; The subpages of the website that are opened</li>
              <li>&bull; Time spent on the relevant subpage of the website</li>
              <li>&bull; Type of operating system</li>
              <li>&bull; Address of the previous subpage</li>
              <li>&bull; Address of the referring party</li>
              <li>&bull; Browser language</li>
              <li>&bull; Internet connection speed</li>
              <li>&bull; Internet Service Provider</li>
            </ul>
            <p>
              <strong>Data collected during registration:</strong>
            </p>
            <ul role="list">
              <li>&bull; Name / surname / nickname</li>
              <li>&bull; E-mail adress</li>
              <li>&bull; Website addresses</li>
              <li>&bull; Phone number</li>
              <li>&bull; IP address (collected automatically)</li>
            </ul>
            <p>
              <strong>
                Data collected when subscribing to the Newsletter service
              </strong>
            </p>
            <ul role="list">
              <li>&bull; Name / surname / nickname</li>
              <li>&bull; E-mail adress</li>
              <li>&bull; IP address (collected automatically)</li>
            </ul>
            <p>
              Part of the data (without identifying data) may be stored in
              cookies. Some data (without identifying data) may be transferred
              to the statistical service provider.
            </p>

            <h2 className="text-xl py-6 font-bold">
              §9 Access to personal data by third parties
            </h2>
            <p>
              As a rule, the only recipient of personal data provided by Users
              is the Administrator. Data collected as part of the services
              provided are not transferred or sold to third parties.
            </p>
            <p>
              Access to data (most often on the basis of the Data Processing
              Agreement) may be granted to entities responsible for maintaining
              the infrastructure and services necessary to run the website, i.e
              .:
            </p>
            <ul role="list">
              <li>
                &bull; Hosting companies that provide hosting or related
                services to the Administrator
              </li>
            </ul>
            <p>
              <strong>
                Entrusting the processing of personal data - Hosting Services,
                VPS or Dedicated Servers
              </strong>
            </p>
            <p>
              In order to run the website, the Administrator uses the services
              of an external hosting provider, VPS or Dedicated Servers -{" "}
              <strong>https://atthost.pl/</strong>. All data collected and
              processed on the website is stored and processed in the service
              provider&apos;s infrastructure located in Poland. It is possible
              to access data as a result of service work carried out by the
              service provider&apos;s staff. Access to this data is governed by
              the contract concluded between the Administrator and the Service
              Provider.
            </p>

            <h2 className="text-xl py-6 font-bold">
              §10 Method of processing personal data
            </h2>
            <p>
              <strong>Personal data provided voluntarily by Users:</strong>
            </p>
            <ul role="list">
              <li>
                &bull; Personal data will not be transferred outside the
                European Union, unless it has been published as a result of an
                individual action of the User (e.g. entering a comment or
                entry), which will make the data available to every visitor to
                the website.
              </li>
              <li>
                &bull; Personal data will not be used for automated decision
                making (profiling).
              </li>
              <li>&bull; Personal data will not be sold to third parties.</li>
            </ul>
            <p>
              <strong>
                Anonymous data (without personal data) collected automatically:
              </strong>
            </p>
            <ul role="list">
              <li>
                &bull; Anonymous data (without personal data) will be
                transferred outside the European Union.
              </li>
              <li>
                &bull; Anonymous data (without personal data) may be used for
                automated decision making (profiling). Profiling anonymous data
                (without personal data) does not have legal effects or similarly
                does not significantly affect the person whose data is subject
                to automatic decision making.
              </li>
              <li>
                &bull; Anonymous data (without personal data) will not be sold
                to third parties.
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">
              §11 Legal basis for the processing of personal data
            </h2>
            <p>
              The website collects and processes Users&apos; data on the basis
              of:
            </p>
            <ul role="list">
              <li>
                &bull; Regulation (EU) 2016/679 of the European Parliament and
                of the Council of 27 April 2016 on the protection of individuals
                with regard to the processing of personal data and on the free
                movement of such data, and repealing Directive 95/46 / EC
                (general regulation on data protection)
              </li>
              <li>
                &bull; art. 6 sec. 1 lit. and the data subject has consented to
                the processing of his personal data for one or more specific
                purposes
              </li>
              <li>
                &bull; art. 6 sec. 1 lit. b processing is necessary for the
                performance of a contract to which the data subject is party, or
                to take steps at the request of the data subject prior to
                entering into a contract
              </li>
              <li>
                &bull; art. 6 sec. 1 lit. fprocessing is necessary for the
                purposes of the legitimate interests pursued by the
                administrator or by a third party
              </li>
              <li>
                &bull; Act of 10 May 2018 on the protection of personal data
                (Journal of Laws of 2018, item 1000)
              </li>
              <li>
                &bull; Act of July 16, 2004 Telecommunications Law (Journal of
                Laws of 2004, No. 171, item 1800)
              </li>
              <li>
                &bull; Act of February 4, 1994 on copyright and related rights
                (Journal of Laws 1994 No. 24 item 83)
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">
              §12 The period of personal data processing
            </h2>
            <p>
              <strong>Personal data provided voluntarily by Users:</strong>
            </p>
            <p>
              As a rule, the indicated personal data is stored only for the
              period of providing the Service on the Website by the
              Administrator. They are deleted or anonymized within 30 days from
              the end of the provision of services (e.g. deletion of a
              registered user account, unsubscribing from the Newsletter list,
              etc.)
            </p>
            <p>
              The exception is the situation that requires securing the
              legitimate purposes of further processing of this data by the
              Administrator. In such a situation, the Administrator will store
              the indicated data, from the time of requesting their removal by
              the User, no longer than for a period of 3 years in the event of a
              breach or suspected breach of the provisions of the website
              regulations by the User.
            </p>
            <p>
              <strong>
                Anonymous data (without personal data) collected automatically:
              </strong>
            </p>
            <p>
              Anonymous statistical data, not constituting personal data, are
              stored by the Administrator in order to keep website statistics
              for an indefinite period
            </p>

            <h2 className="text-xl py-6 font-bold">
              §13 Users&apos; rights related to the processing of personal data
            </h2>
            <p>
              The website collects and processes Users&apos; data on the basis
              of:
            </p>
            <ul role="list">
              <li>
                &bull; <strong>The right to access personal data</strong> Users
                have the right to access their personal data, carried out at the
                request submitted to the Administrator
              </li>
              <li>
                &bull; <strong>The right to rectify personal data</strong> Users
                have the right to request the Administrator to immediately
                correct personal data that is incorrect and / or supplement
                incomplete personal data, carried out at the request submitted
                to the Administrator
              </li>
              <li>
                &bull; <strong>The right to delete personal data</strong> Users
                have the right to request the Administrator to immediately
                delete personal data, carried out at the request submitted to
                the Administrator. The Administrator reserves the right to
                suspend the execution of the request to delete data in order to
                protect the legitimate interest of the Administrator (e.g. when
                the User has violated the Regulations or the data was obtained
                as a result of correspondence). In the case of the Newsletter
                service, the User has the option of removing his personal data
                by himself using the link in each e-mail sent.
              </li>
              <li>
                &bull;{" "}
                <strong>
                  The right to limit the processing of personal data
                </strong>{" "}
                Users have the right to limit the processing of personal data in
                the cases specified in art. 18 GDPR, incl. questioning the
                correctness of personal data, carried out at the request
                submitted to the Administrator
              </li>
              <li>
                &bull; <strong>The right to transfer personal data</strong>{" "}
                Users have the right to obtain from the Administrator personal
                data regarding the User in a structured, commonly used
                machine-readable format, implemented at the request submitted to
                the Administrator
              </li>
              <li>
                &bull;{" "}
                <strong>
                  The right to object to the processing of personal data
                </strong>{" "}
                Users have the right to object to the processing of their
                personal data in the cases specified in art. 21 of the GDPR,
                implemented at the request of the Administrator
              </li>
              <li>
                &bull; <strong>Right to lodge a complaint</strong> Users have
                the right to lodge a complaint with the supervisory body dealing
                with the protection of personal data.
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">
              §14 Contact to the Administrator
            </h2>

            <p>
              The Administrator can be contacted in one of the following ways
            </p>
            <ul role="list">
              <li>
                &bull; <strong>Postal address</strong> - Media Control Agency ,
                Narcis 7, 1619 BC Andijk, the Netherlands
              </li>
              <li>
                &bull; <strong>E-mail address</strong> -
                info@media-control-agency.com
              </li>
              <li>
                &bull; <strong>Phone call</strong> – +31 619 628 588
              </li>
              <li>
                &bull; <strong>Contact form</strong> - available at: /contact
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">§15 Website requirements</h2>
            <ul role="list">
              <li>
                &bull; Restricting the saving and access to Cookie files on the
                User&apos;s Device may cause some functions of the Website to
                malfunction.
              </li>
              <li>
                &bull; The Administrator does not bear any responsibility for
                incorrectly functioning functions of the Website if the User
                restricts in any way the possibility of saving and reading
                cookie files.
              </li>
            </ul>

            <h2 className="text-xl py-6 font-bold">§16 External links</h2>
            <p>
              On the Website - articles, posts, entries or comments of Users,
              there may be links to external websites with which the Website
              Owner does not cooperate. These links and the pages or files
              indicated under them may be dangerous for your Device or pose a
              threat to the security of your data. The Administrator is not
              responsible for the content outside the Website.
            </p>

            <h2 className="text-xl py-6 font-bold">
              §17 Changes to the Privacy Policy
            </h2>
            <ul role="list">
              <li>
                &bull; The Administrator reserves the right to change this
                Privacy Policy at any time without informing Users about it as
                regards the use and use of anonymous data or the use of cookies.
              </li>
              <li>
                &bull; The Administrator reserves the right to change this
                Privacy Policy in any way regarding the processing of Personal
                Data, about which he will inform Users who have user accounts or
                subscribed to the newsletter service, via e-mail within 7 days
                of changing the records. By continuing to use the services, you
                have read and accepted the changes to the Privacy Policy. In the
                event that the User does not agree with the introduced changes,
                he is obliged to delete his account from the Website or
                unsubscribe from the Newsletter service.
              </li>
              <li>
                &bull; The changes made to the Privacy Policy will be published
                on this subpage of the Website.
              </li>
              <li>
                &bull; The introduced changes come into force upon their
                publication.
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
