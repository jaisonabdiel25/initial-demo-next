// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface response {
  name: string,
  age: number
}
export default function handler(req: NextApiRequest, res: NextApiResponse<response>) {
  res.status(200).json({ name: 'John Doe', age: 20 })
}
