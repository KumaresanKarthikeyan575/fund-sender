"use client"

import { useMemo, useState } from "react"
import { InputField } from "./ui/InputField"
import { chainsToTSender,tsenderAbi,erc20Abi } from "../constants"
import { useChainId, useConfig, useAccount, useWriteContract } from "wagmi"
import {readContract,waitForTransactionReceipt} from "@wagmi/core"
import { calculateTotal } from "../utils/calculateTotal/calculateTotal"
import { SiTodoist } from "react-icons/si"

export default function AirdropForm(){

    const [tokenAddress,setTokenAddress]=useState("")
    const [Recipients, setRecipients]=useState("")
    const [Amounts, setAmounts]=useState("")
    const chainId=useChainId()
    const config=useConfig()
    const account=useAccount()
    const total: number=useMemo(()=>calculateTotal(Amounts),[Amounts])
    const {data: hash, isPending, writeContractAsync}=useWriteContract()
    
    async function getApprovedAmount(TSenderAddress:string|null): Promise<number>{
        if(!TSenderAddress){
            alert("no address found, please use a supported chain")
            return 0;
        }
        const response=await readContract(config,{
            abi:erc20Abi,
            address:tokenAddress as `0x${string}`,
            functionName:"allowance",
            args:[account.address, TSenderAddress as `0x${string}`]
        })
        return response as number
    }

    async function handleSubmit() {
        const TSenderAddress=chainsToTSender[chainId]["tsender"]
        const approvedAmount=await getApprovedAmount(TSenderAddress)
        if(approvedAmount<total){
            const approvalHash=await writeContractAsync({
            abi:erc20Abi,
            address:tokenAddress as `0x${string}`,
            functionName:"allowance",
            args:[TSenderAddress as `0x${string}`,BigInt(total)]
            })
            const approvalReceipt=await waitForTransactionReceipt(config,{
                hash:approvalHash
            })
            console.log("Approval confirmed",approvalReceipt)
            await writeContractAsync({
                abi:tsenderAbi,
                address:TSenderAddress as `0x${string}`,
                functionName:"airdropERC20",
                args:[
                    tokenAddress,
                    Recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
                    Amounts.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
                    BigInt(total),
                ],
            })
            
        }else{
            await writeContractAsync({
                abi:tsenderAbi,
                address:TSenderAddress as `0x${string}`,
                functionName:"airdropERC20",
                args:[
                    tokenAddress,
                    Recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
                    Amounts.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
                    BigInt(total),
                ],
            })
        }
        
    }
    return(
        <div>
           <InputField
               label="Token Address"
               placeholder="0x"
               value={tokenAddress}
               onChange={e=>setTokenAddress(e.target.value)}
            />
            <InputField
               label="Recipients"
               placeholder="0x1234,0x12345"
               value={Recipients}
               onChange={e=>setRecipients(e.target.value)}
               large={true}
            />
            <InputField
               label="Amount"
               placeholder="100,200,300"
               value={Amounts}
               onChange={e=>setAmounts(e.target.value)}
               large={true}
            />
            <button onClick={handleSubmit} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                send tokens
            </button>
        </div>

    )
}



