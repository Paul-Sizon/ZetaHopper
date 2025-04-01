"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How does ZetaHopper work?",
      answer:
        "ZetaHopper is an automated trading bot that operates directly on the Zetachain blockchain. It uses advanced algorithms to analyze market conditions and execute trades at optimal times to maximize returns. You simply connect your wallet, set your trading amount and risk preference, and the bot handles everything else.",
    },
    {
      question: "Is my investment safe with ZetaHopper?",
      answer:
        "ZetaHopper operates fully on-chain with transparent transactions that you can verify at any time. Your funds remain in your control, and you can withdraw them whenever you want. We implement multiple security measures to ensure the safety of your assets while trading.",
    },
    {
      question: "What are the fees for using ZetaHopper?",
      answer:
        "ZetaHopper charges a small performance fee of 10% on profits generated. There are no subscription fees or hidden charges. You only pay when the bot makes money for you. Standard network transaction fees on Zetachain will apply for on-chain operations.",
    },
    {
      question: "What cryptocurrencies can I trade with ZetaHopper?",
      answer:
        "ZetaHopper supports trading of all major tokens available on Zetachain, including ZETA, ETH, BTC, and various stablecoins like USDC. We continuously add support for new tokens as they become available on the Zetachain ecosystem.",
    },
    {
      question: "How do I withdraw my funds?",
      answer:
        "You can withdraw your funds at any time through our user-friendly interface. Simply connect your wallet, navigate to the dashboard, and click on the withdraw button. Your funds will be transferred back to your wallet immediately.",
    },
    {
      question: "What kind of returns can I expect?",
      answer:
        "While past performance is not indicative of future results, ZetaHopper has historically generated average monthly returns of 15-20% for users. Returns vary based on market conditions, risk settings, and trading amount. Our dashboard provides transparent reporting on all trading performance.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-base-200">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-content">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-base-content">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-base-content/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about ZetaHopper and how it can help you trade on Zetachain.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto mt-12 max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-base-300">
                <AccordionTrigger className="text-base-content hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base-content/70">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

