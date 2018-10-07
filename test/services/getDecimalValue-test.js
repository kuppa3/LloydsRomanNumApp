const chai = require('chai')
const expect = chai.expect

const decimalService = require('../../services/getDecimalValue')

describe('getDecimalValue convert method Test', () => {
  context('Basic Letter Conversions', () => {
    it('checks I to be 1', async () => {
      expect(await decimalService.convert('I')).to.equal('1')
    })

    it('checks V to be 5', async () => {
      expect(await decimalService.convert('V')).to.equal('5')
    })

    it('checks X to be 10', async () => {
      expect(await decimalService.convert('X')).to.equal('10')
    })

    it('checks L to be 50', async () => {
      expect(await decimalService.convert('L')).to.equal('50')
    })

    it('checks C to be 100', async () => {
      expect(await decimalService.convert('C')).to.equal('100')
    })

    it('checks D to be 500', async () => {
      expect(await decimalService.convert('D')).to.equal('500')
    })

    it('checks M to be 1000', async () => {
      expect(await decimalService.convert('M')).to.equal('1000')
    })
  })

  context('Conversion of subtractive Roman numerals', () => {
    it('checks IV to be 4', async () => {
      expect(await decimalService.convert('IV')).to.equal('4')
    })

    it('checks IX to be 9', async () => {
      expect(await decimalService.convert('IX')).to.equal('9')
    })

    it('checks XL to be 40', async () => {
      expect(await decimalService.convert('XL')).to.equal('40')
    })

    it('checks XC to be 90', async () => {
      expect(await decimalService.convert('XC')).to.equal('90')
    })

    it('checks CD to be 400', async () => {
      expect(await decimalService.convert('CD')).to.equal('400')
    })

    it('checks CM to be 900', async () => {
      expect(await decimalService.convert('CM')).to.equal('900')
    })
  })

  context('Conversion of complex Roman numerals', () => {
    it('checks III to be 3', async () => {
      expect(await decimalService.convert('III')).to.equal('3')
    })

    it('checks VIII to be 8', async () => {
      expect(await decimalService.convert('VIII')).to.equal('8')
    })

    it('checks XIX to be 19', async () => {
      expect(await decimalService.convert('XIX')).to.equal('19')
    })

    it('checks XXXVIII to be 38', async () => {
      expect(await decimalService.convert('XXXVIII')).to.equal('38')
    })

    it('checks MCMIV to be 1904', async () => {
      expect(await decimalService.convert('MCMIV')).to.equal('1904')
    })

    it('checks MMMCMXCIX to be 3999', async () => {
      expect(await decimalService.convert('MMMCMXCIX')).to.equal('3999')
    })
  })
})
